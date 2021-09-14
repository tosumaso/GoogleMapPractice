package googleMap.example.Form;

public class GooglePostForm {
	
	private Double lat;
	private Double lng;
	private String title;
	
	
	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLng() {
		return lng;
	}
	public void setLng(Double lng) {
		this.lng = lng;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public void setAll(Double lat, Double lng, String title) {
		this.lat = lat;
		this.lng = lng;
		this.title = title;
	}
	
}
