package com.meaddress.user.address;

import com.meaddress.user.user.User;
import com.meaddress.user.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressService {
    private final AddressRepository addressRepository;
    private final UserRepository userRepository;

    public Address createAddress(Address address, Principal connectedUser) {
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        address.setUserId(user.getId());

        validateUserExistence(address.getUserId());
        return addressRepository.save(address);
    }

    public Address getAddressById(Long addressId, Principal connectedUser) {
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        return addressRepository.findByUserIdAndAddressId(addressId,user.getId()).orElse(null);
    }

    public List<Address> getAllAddresses(Principal connectedUser) {
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        return addressRepository.findByUserId(user.getId());
    }

    public Address updateAddress(Address address, Principal connectedUser) {
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        address.setUserId(user.getId());
        validateUserExistence(address.getUserId());
        return addressRepository.save(address);
    }

    public void deleteAddress(Long addressId, Principal connectedUser) {
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        Address address = addressRepository.findByUserIdAndAddressId(addressId,user.getId()).orElse(null);

        if(address != null) {
            addressRepository.deleteById(addressId);
        }
    }

    private void validateUserExistence(Integer userId) {
        if (userId != null && !userRepository.existsById(userId)) {
            throw new IllegalArgumentException("User with ID " + userId + " does not exist");
        }
    }
}
