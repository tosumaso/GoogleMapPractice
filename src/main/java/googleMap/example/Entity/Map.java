package googleMap.example.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="map")
public class Map {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="lat", nullable=false)
	private Double lat;
	
	@Column(name="lng", nullable=false)
	private Double lng;
	
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "map")
	private MapPost post;
	
	public Map(Double lat, Double lng) {
		this.lat = lat;
		this.lng = lng;
	}
	
	public Map() {

	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
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
	public MapPost getPost() {
		return post;
	}
	public void setPost(MapPost post) {
		this.post = post;
	}
	
	
}
