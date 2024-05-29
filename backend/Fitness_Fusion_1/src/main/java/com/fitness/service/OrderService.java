package com.fitness.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fitness.beans.UserCart;
import com.fitness.beans.UserOrderDetails;
import com.fitness.repository.CartRepo;
import com.fitness.repository.UserOrderDetailsRepo;

@Service
public class OrderService {

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private UserOrderDetailsRepo orderDetailsRepo;

    @Transactional
    public UserOrderDetails createOrder(Integer userId, float purchaseAmount) {
        UserCart userCart = cartRepo.findById(userId).orElse(null);
        if (userCart == null) {
            return null; // User not found
        }

        String productIds = userCart.getProduct_ids();
        UserOrderDetails orderDetails = new UserOrderDetails();
        orderDetails.setUserId(userId);
        orderDetails.setPurchaseAmount(purchaseAmount);
        orderDetails.setProduct_ids(productIds);

        // Clear user cart after successful order creation
        userCart.setProduct_ids(null);
        cartRepo.save(userCart);

        orderDetailsRepo.save(orderDetails);
        return orderDetails;
    }
}
