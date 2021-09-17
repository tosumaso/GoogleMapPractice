package googleMap.example.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="map_post") //スネークケースでSQLのテーブルを定義する
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class) //entityをJsonにシリアライズするとき、参照先のentityもシリアライズして無限ループしてしまうのでアノテーションで防ぐ
public class MapPost {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="title", nullable=false)
	private String title;
	
	@OneToOne
	@JoinColumn(name="map_id", referencedColumnName="id")
	//@JsonBackReference //参照されたこのentityが参照元をループしないように設定する(@JsonIdentityInfoとは違い、こちら側からだけ参照できるようにする)
	private Map map;
	
	public MapPost(String title) {
		this.title = title;
	}

	public MapPost() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Map getMap() {
		return map;
	}

	public void setMap(Map map) {
		this.map = map;
	}
	
		
}
