package googleMap.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import googleMap.example.Entity.Map;
import googleMap.example.Entity.MapPost;
import googleMap.example.Form.GooglePostForm;
import googleMap.example.Repository.MapRepository;

@Controller
public class GoogleMapController {
	
	@Autowired
	MapRepository mapRepository;

	@GetMapping("/getGoogleMap")
	public String getGoogleMap() {
		return "/google";
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
