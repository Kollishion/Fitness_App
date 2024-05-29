package com.fitness.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fitness.beans.UserCart;
import com.fitness.service.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins="http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add/{userId}/{productId}")
    public ResponseEntity<String> addToCart(@PathVariable Integer userId, @PathVariable String productId) {
        boolean added = cartService.addToCart(userId, productId);
        if (added) {
            return new ResponseEntity<>("Product added to cart successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/view/{userId}")
    public ResponseEntity<UserCart> viewCart(@PathVariable Integer userId) {
        UserCart userCart = cartService.viewCart(userId);
        if (userCart != null) {
            return new ResponseEntity<>(userCart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
