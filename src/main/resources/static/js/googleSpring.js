let japan //Jsのグローバルスコープに定義された変数はhtmlが読み込む別のJsファイルでも使える
const locations = []

function initMap() {
	const mapEle = document.querySelector("#map");
	japan = new google.maps.LatLng(35.4010216, 137.9153554);

	const mapOpt = {
		zoom: 5.4,
		center: japan,
		keyboardShortcuts: false,
		mapTypeControl: false
	}

	const map = new google.maps.Map(mapEle, mapOpt);

	showCurrentMarkers();

	map.addListener("click", (event) => {
		showModal(event.latLng);
	})

	function showModal(latLng) { //Mapをクリックしたらモーダル画面を表示する

		const modal = document.querySelector("#modal"); //モーダル画面の背景
		const closeBtn = document.querySelector("#closeBtn"); //モーダル画面を閉じるボタン

		modal.style.display = "block"; //モーダル表示ボタンが押されたら#modalのdivのstyle属性のdisplayプロパティにblockを追加
		document.getElementById("lat").value = latLng.lat();
		document.getElementById("lng").value = latLng.lng();

		closeBtn.addEventListener("click", () => {
			modal.style.display = "none"; //閉じるボタンが押されたらモーダル背景のdivタグにdisplay:noneを設定して見えなくする
		})
		window.addEventListener('click', (e) => { //閉じるボタンの他にモーダル背景がクリックされたらモーダルを閉じる
			if (e.target === modal) { //クリックされた要素が#modalのdiv要素なら
				modal.style.display = 'none';
			}
		});
	}
	window.addEventListener("load", () => { //ホームページを取得して1秒後にマーカーを一覧表示する
		setTimeout(() => {
			fetch("get/markers").then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("エラー");
				}
			}).then(data => {
				data.forEach(d => {
					locations.push(d);
				})
			}).then(()=> showCurrentMarkers()).catch(error => alert(error));
		}, 1000)
	});

	function showCurrentMarkers() { //既存のマーカーを表示
		let currentWindow;
		locations.map(m => { 
			const marker = new google.maps.Marker({
				position: { lat: m.lat, lng: m.lng },
				map: map
			})
			
			marker.addListener("click", () => {
				currentWindow && currentWindow.close();
				const infoWindow = new google.maps.InfoWindow({ //Ajaxで受け取った配列に複数のレコードがが苦悩されており、外部参照先の値もJSで参照できる
				content: `<a href="/getPostMap">${m.post.title}</a>` //JSファイル内なためthymeleafを使えない。
			});
				infoWindow.open({
					anchor: marker,
					map,
					shoudFocus: false
				});
				currentWindow = infoWindow;
			})
		})
	}
}

