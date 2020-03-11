package com.app.gadget.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@RestController
public class hystrixController {
	
	@Autowired
	RestTemplate restTemplate;
	@Value("${items-service.url}")
	private String url;
	
	@HystrixCommand(
			groupKey="fallback",
			commandKey = " fallback",
			fallbackMethod = "fall"
			)
	@GetMapping("/hystrixtest")
	public Object dosomething() {
		//throw new RuntimeException();
		return restTemplate.getForObject(url, Object.class);
	}
	
	public String fall() {
		return "fall back initated";
	}

}
