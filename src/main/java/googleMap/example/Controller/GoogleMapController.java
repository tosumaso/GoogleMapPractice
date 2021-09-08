package googleMap.example.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GoogleMapController {

	@GetMapping("/getGoogleMap")
	public String getGoogleMap() {
		return "/google";
	}
}
