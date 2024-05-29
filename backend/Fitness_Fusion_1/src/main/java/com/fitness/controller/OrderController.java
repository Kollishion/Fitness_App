package com.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitness.beans.UserOrderDetails;
import com.fitness.service.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins="http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<UserOrderDetails> createOrder(@RequestBody CreateOrderRequest request) {
        UserOrderDetails orderDetails = orderService.createOrder(request.getUserId(), request.getPurchaseAmount());
        if (orderDetails == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(orderDetails, HttpStatus.CREATED);
    }
}

class CreateOrderRequest {
    private Integer userId;
    private float purchaseAmount;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public float getPurchaseAmount() {
		return purchaseAmount;
	}
	public void setPurchaseAmount(float purchaseAmount) {
		this.purchaseAmount = purchaseAmount;
	}

    
}
