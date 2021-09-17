package googleMap.example.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import googleMap.example.Entity.Map;

public interface MapRepository extends JpaRepository<Map,Integer>{

	List<Map> findByPostLike(String post);
}
