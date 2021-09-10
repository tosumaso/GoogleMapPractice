package googleMap.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import googleMap.example.Entity.Map;

public interface MapRepository extends JpaRepository<Map,Integer>{

}
