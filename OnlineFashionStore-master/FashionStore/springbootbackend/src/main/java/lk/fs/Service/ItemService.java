package lk.fs.Service;

import lk.fs.Entity.Item;
import org.bson.types.ObjectId;

import java.util.List;

public interface ItemService {
    Item addItem(Item item);


    Item findItem(ObjectId itemCode);
}
