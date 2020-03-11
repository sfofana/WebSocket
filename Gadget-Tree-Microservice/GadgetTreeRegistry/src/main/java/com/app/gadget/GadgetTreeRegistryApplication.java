package com.app.gadget;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class GadgetTreeRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(GadgetTreeRegistryApplication.class, args);
	}

}
