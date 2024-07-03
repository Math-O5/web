package com.meaddress.user.address;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/address")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;

    @PostMapping
    public ResponseEntity<Address> createAddress(@RequestBody Address address, Principal connectedUser) {
        Address createdAddress = addressService.createAddress(address, connectedUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAddress);
    }

    @GetMapping("/{addressId}")
    public ResponseEntity<Address> getAddressById(@PathVariable Long addressId, Principal connectedUser) {
        Address address = addressService.getAddressById(addressId, connectedUser);
        if (address != null) {
            return ResponseEntity.ok(address);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Address>> getAllAddresses(Principal connectedUser) {
        List<Address> addresses = addressService.getAllAddresses(connectedUser);
        return ResponseEntity.ok(addresses);
    }

    @PutMapping("/{addressId}")
    public ResponseEntity<Address> updateAddress(@PathVariable Long addressId, @RequestBody Address address, Principal connectedUser) {
        address.setId(addressId);
        Address updatedAddress = addressService.updateAddress(address, connectedUser);
        return ResponseEntity.ok(updatedAddress);
    }

    @DeleteMapping("/{addressId}")
    public ResponseEntity<Void> deleteAddress(@PathVariable Long addressId, Principal connectedUser) {
        addressService.deleteAddress(addressId, connectedUser);
        return ResponseEntity.noContent().build();
    }
}
