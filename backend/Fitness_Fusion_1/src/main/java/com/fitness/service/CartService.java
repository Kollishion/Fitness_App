package com.fitness.service;

import com.fitness.beans.UserCart;
import com.fitness.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepo cartRepo;

    public boolean addToCart(Integer userId, String productId) {
        UserCart userCart = cartRepo.findById(userId).orElse(null);
        if (userCart == null) {
            return false; // User not found
        }
        String productIds = userCart.getProduct_ids();
        if (productIds == null || productIds.isEmpty()) {
            productIds = productId;
        } else {
            productIds += "," + productId;
        }
        userCart.setProduct_ids(productIds);
        cartRepo.save(userCart);
        return true;
    }

    public UserCart viewCart(Integer userId) {
        return cartRepo.findById(userId).orElse(null);
    }
}
