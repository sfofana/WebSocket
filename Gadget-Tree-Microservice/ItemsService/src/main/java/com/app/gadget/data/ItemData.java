package com.app.gadget.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.app.gadget.model.Item;

@Repository
public interface ItemData extends MongoRepository<Item, Integer> {

}
