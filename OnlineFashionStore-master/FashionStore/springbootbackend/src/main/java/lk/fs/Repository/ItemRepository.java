package lk.fs.Repository;

import lk.fs.Entity.Item;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ItemRepository extends MongoRepository<Item , ObjectId> {

//    public Object findItemBy_id( ObjectId _id );
}
