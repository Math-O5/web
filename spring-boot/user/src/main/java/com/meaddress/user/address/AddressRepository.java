package com.meaddress.user.address;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    List<Address> findByUserId(Integer userId);

    @Query(value="SELECT * FROM ADDRESS A WHERE (A.id = :addressId AND A.userID = :userId)",
            nativeQuery = true)
    Optional<Address> findByUserIdAndAddressId(@Param("addressId") Long addressId, @Param("userId") Integer userId);
}
