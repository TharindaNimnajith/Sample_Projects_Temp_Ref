package lk.fs.Repository;

import lk.fs.Entity.Item;
import lk.fs.Entity.UserDetail;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserDetailRepository extends MongoRepository<UserDetail, ObjectId> {
}
