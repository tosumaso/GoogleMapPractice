/*document.addEventListener("DOMContentLoaded", () => {
	const modalButton = document.querySelector("#button"); //モーダル画面を表示させるボタン
	const modal = document.querySelector("#modal"); //モーダル画面の背景
	const closeBtn = document.querySelector("#closeBtn"); //モーダル画面を閉じるボタン
	modalButton.addEventListener("click", () => {
		modal.style.display = "block"; //モーダル表示ボタンが押されたら#modalのdivのstyle属性のdisplayプロパティにblockを追加
	})
	closeBtn.addEventListener("click", () => {
		modal.style.display = "none"; //閉じるボタンが押されたらモーダル背景のdivタグにdisplay:noneを設定して見えなくする
	})
	window.addEventListener('click', (e) => { //閉じるボタンの他にモーダル背景がクリックされたらモーダルを閉じる
		if (e.target === modal) { //クリックされた要素が#modalのdiv要素なら
			modal.style.display = 'none';
		}
	});
})*/