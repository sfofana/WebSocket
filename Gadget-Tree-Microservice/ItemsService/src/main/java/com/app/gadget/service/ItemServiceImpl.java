package com.app.gadget.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.gadget.data.ItemData;
import com.app.gadget.model.Item;

@Service
public class ItemServiceImpl implements ItemService {

	@Autowired
	ItemData itemData;
	
	@Override
	public List<Item> getAllItems() {
		return itemData.findAll();
	}

	@Override
	public Item searchItem(int id) {
		return itemData.findById(id).get();
	}
	
}
