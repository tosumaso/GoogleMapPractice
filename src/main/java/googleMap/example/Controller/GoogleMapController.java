package googleMap.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import googleMap.example.Entity.Map;
import googleMap.example.Entity.MapPost;
import googleMap.example.Form.GooglePostForm;
import googleMap.example.Repository.MapRepository;

@Controller
public class GoogleMapController {
	
	@Autowired
	MapRepository mapRepository;

	@GetMapping("/getGoogleMap") //一覧画面取得
	public String getGoogleMap() {
		return "/google";
	}
	
	@GetMapping("get/markers") //一覧画面を取得して1秒後にマーカー情報を取得してMapに表示するAjax処理
	@ResponseBody
	public List<Map> getMarkers(){
		List<Map> markers = mapRepository.findAll();
		return markers;
	}
	
	@PostMapping("/postMap")
	public String postGoogle(GooglePostForm form) {
		Map map = new Map(form.getLat(), form.getLng());
		MapPost post = new MapPost(form.getTitle());
		map.setPost(post);
		post.setMap(map);
		mapRepository.save(map);
		return "redirect:/getGoogleMap";
	}
}
