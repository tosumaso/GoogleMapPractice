let map;  // 他のメソッドから参照できるようにグローバルスコープ
let tokyo;
let osaka;
let yonaguni;
let marker;

function initMap() { //Mapの初期化関数

	tokyo = new google.maps.LatLng(35.689614, 139.691585); //緯度、経度を指定してLatLngオブジェクトを作成、中央座標を指定
	osaka = new google.maps.LatLng(34.686272, 135.519649);
	yonaguni = new google.maps.LatLng(24.458118, 122.9741176);

	//const useragent = navigator.userAgent; ユーザーエージェント()webサイトにアクセスしているブラウザ、OS情報)を取得
	//　ユーザーの端末がiphoneまたはAndroidの場合大きさを変更する
	/*if (useragent.indexOf('IPhone') != -1 || useragent.indexOf('Android') != -1){
		console.log("hihi")
		mapdiv.style.width = '100%';
		mapdiv.style.height = '100%';
	}*/

	const mapdiv = document.getElementById("map");

	//googleMapを表示するための設定
	let opts = {
		zoom: 13.7, //Mapのズーム度合い(必須！、map.setZoom(num)で後から設定できる)
		center: yonaguni,
		keyboardShortcuts: false, //キーボードでのMap操作を無効

		//scrollwheel: false //Mapのマウスホイール操作を無効
		//disableDoubleClickZoom: true //Mapのダブルクリック操作を無効
		//draggable: false //Mapのドラッグ操作を無効
		//mapTypeId: 'roadmap' //Mapの種類(デフォルトは'roadmap')(後からmap.setMapTypeId(mapTypeId)で変更できる)
		//mapTypeControl: false, //Mapの種類をユーザーが変更できなくする

		mapTypeControlOptions: { //mapTypeControlOptionsでMapの表示形式についての設定をオブジェクト形式で行える
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, //ドロップダウン形式にボタンの配置を変更(デフォルト: DEFAULT)
			position: google.maps.ControlPosition.TOP //Mapの種類変更ボタンの位置を変更できる(デフォルト: TOP_LEFT)
		}
	};
	map = new google.maps.Map(mapdiv, opts); //第一引数にmapを表示する要素、第二引数に座標やズームレベル等を指定したオプションオブジェクトを指定してmapインスタンスを作成
	//map.addListener('drag', dispLatLng); //googleMapApiでインスタンス化したオブジェクトはaddListener('Event',callback)でイベント登録できる

	const infoWindow = new google.maps.InfoWindow({ //指定した位置に情報ウィンドウを表示するための設定(後からinfowindow.setOptions({InfoWindowOptions})で追加できる)
		content: "与那国島", //ウィンドウのテキスト(htmlタグやNodeも描画できる)
		position: yonaguni, //ウィンドウをどこに表示するか
		maxWidth: 250, //ウィンドウの最大幅を指定(openでウィンドウを開く前に設定する必要がある.後から設定する場合はcloseしてからsetOptionする)
		//pixelOffset: new google.maps.Size(10, -6), //ウィンドウが指している座標から何ピクセルウィンドウをずらすか指定、Size(x軸のピクセル、y軸のピクセル)でSizeインスタンスを作成
		zIndex: 1, //ウィンドウが重なっとき数値が高いものほど上にくる(zindexを使用しない場合は緯度が低いウィンドウが上にくる)
		disableAutoPan: true //ウィンドウを表示したとき自動で中央に寄せないようにする
	});

	//infoWindow.open(map); //InfoWindowはinfowindow.open(map)で明示的に表示する処理を書く必要がある
	// infoWindow.close() //ウィンドウを削除する

	const mOptions = { //マーカーを作成するための設定オブジェクト(後からmarker.setOptions(MarkerOptions)で設定を変更できる)
		position: yonaguni,
		map: map, //マーカーを入れる対象のMapインスタンス
		icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" //マーカーのアイコンを変更できる
	};
	marker = new google.maps.Marker(mOptions); //Marker(MarkerOptions)でマーカーインスタンスを作成
	// marker.setMap(map/null); //マーカーを作成した後にmarker.setMap(map)で指定したMapにマーカーを表示できる。nullを引数にした場合はマーカーをマップから削除する 
	;

	marker.addListener("click", () => { //マーカーをクリックしたらウィンドウを開く
		infoWindow.open({
			anchor: marker,
			map,
			shouldFocus: false,
		});
	});
	
	//複数の座標を結ぶ線を作成
	const polyLatLngs =[{ lat: 37.772, lng: -122.214 },{ lat: 21.291, lng: -157.821 },{ lat: -18.142, lng: 178.431 }]
	const polyops = new google.maps.Polyline({ //Polyline({PolylineOptions})でPolylineオブジェクトを作成
		path: polyLatLngs, //座標の配列
		geodesic: true,
		strokeOpacity: 1.0, //透明度
		strokeWeight: 2 //線の太さ
	});
	polyops.setMap(map); //polyline.setMap(map)でmapに線を表示

	//クリックした場所にマーカーを立て、座標を表示する
	map.addListener("click",addMarker);
	
	function addMarker(event){
		new google.maps.Marker({
			position: event.latLng, //eventに格納されているLatLngを指定
			map: map
		})
		console.log(event.latLng.lat() + "   " + event.latLng.lng()) //LatLngオブジェクトから緯度、経度を取得
		document.getElementById("LatLngOnClick").textContent = event.latLng.lat() + "   " + event.latLng.lng();
	}
	


};
