let japan //Jsのグローバルスコープに定義された変数はhtmlが読み込む別のJsファイルでも使える
let markerLatLng;
const locations = [
	{ name: "大島", lat: 34.767177, lng: 139.382119, id: 1 },
	{ name: "利島", lat: 34.523533, lng: 139.277686, id: 2 }
]

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

	locations.map(m => { //既存のマーカーを表示
		marker = new google.maps.Marker({
			position: { lat: m.lat, lng: m.lng },
			map: map
		})
	})

	map.addListener("click", (event) => {
		showModal(event.latLng);
	})
	
	function showModal(latLng) { //Mapをクリックしたらモーダル画面を表示する
		console.log("hihi")
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

}

