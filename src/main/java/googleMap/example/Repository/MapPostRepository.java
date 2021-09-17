package googleMap.example.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import googleMap.example.Entity.MapPost;

public interface MapPostRepository extends JpaRepository<MapPost,Integer> {
	
	@Query(value="SELECT m FROM MapPost m WHERE m.title LIKE %:keyword%")
	List<MapPost> findByKeywordLike(@Param("keyword") String keyword);
}
