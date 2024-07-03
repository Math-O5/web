package com.meaddress.user.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.logging.Logger;

@Service
public class JwtService {

    // TODO: This key MUST be stored in env, but I will let it here to simplify execution
    private static final String SECRET_KEY = "5V8lH5KwM8VMQ1H1hgTttiUIwHgW4Lcvi2I/N7kDmElX5JW9hY+tok5alMMr1URCwtl64Kxaw3XSzA24BBvoFevbia/nRgPWHabfdfBOjpCqcsIYpSeHLAcabBTKvsNDWPigfmsEizXd7WvLxT3JtYVahkbsB68M3jpE72N2/JZYgQicaiXRlnzEunJrIF/BDLnG92mlFFugX9OEczmhHmbL/CGvS0iZX3VdJfYcWhgGCXmtjRWvia5eOhqgUXRkO7gO9ZkqQd1QvpJfGQON4kSUgEtCR3Oll5hS4E5Zyeyiw7PPF9n9GhFQ+cphkS47EK9L6GwjdTa+Xq2O5xHGQddaXXY3IfT5AuwSvm+DLBk=";
    private static final Logger logger = Logger.getLogger(JwtService.class.getName());

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token,  Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {

        Key signInKey = getSignInKey();
        System.out.println("Generated Sign-In Key: " + signInKey);

        return Jwts
                .parserBuilder()
                .setSigningKey(signInKey)
                .build()
                .parseClaimsJwt(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        logger.info("Key Bytes: " + keyBytes);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String,Object> extractClaims, UserDetails userDetails) {
        return Jwts
                .builder()
                .setClaims(extractClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 1000 * 60  * 24))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }


}
