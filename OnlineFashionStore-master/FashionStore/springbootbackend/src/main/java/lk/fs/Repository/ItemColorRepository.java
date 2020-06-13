package lk.fs.Repository;


import lk.fs.Entity.ItemColor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemColorRepository extends MongoRepository<ItemColor, ObjectId> {
}
