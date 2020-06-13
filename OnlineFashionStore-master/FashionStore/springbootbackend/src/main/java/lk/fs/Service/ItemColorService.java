package lk.fs.Service;

import lk.fs.Entity.Item;
import lk.fs.Entity.ItemColor;

import java.util.List;

public interface ItemColorService {
    ItemColor addItemColorDetails(ItemColor itemColorDetails);

    List<ItemColor> getAll();
}
