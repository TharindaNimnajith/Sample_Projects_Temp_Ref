package lk.fs.Service.Impl;

import lk.fs.Entity.Item;
import lk.fs.Repository.ItemRepository;
import lk.fs.Service.ItemService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;



    @Override
    public Item addItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public Item findItem(ObjectId itemCode){
        Item i = null;
        for (Item item : itemRepository.findAll()){
            if(item.get_id()== itemCode){
                System.out.println("sout");
                i=item;
            }
        }
       return  i;
    }


}
