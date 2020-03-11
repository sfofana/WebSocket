package com.app.gadget.service;

import java.util.List;

import com.app.gadget.model.Item;

public interface ItemService {

	public List<Item> getAllItems(); 	
	public Item searchItem(int id);
}
