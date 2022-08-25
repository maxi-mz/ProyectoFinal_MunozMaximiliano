package com.portfolio.maximiliano.Security.jwt;

import com.portfolio.maximiliano.Entity.User;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtTokenUtil.class);
    private static final long EXPIRE_DURATION=24*60*60*1000; // 24 horas

    @Value("${app.jwt.secret}")
    private String secretkey;

    public String generateAcessToken(User user){
        return Jwts.builder()
                .setSubject(user.getId() + "," + user.getEmail())
                .setIssuer("CodeJava")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRE_DURATION))
                .signWith(SignatureAlgorithm.HS512,secretkey)
                .compact();
    }
    public boolean validateAccessToken(String token){
        try{
            Jwts.parser().setSigningKey(secretkey).parseClaimsJws(token);
            return true;
        }catch (ExpiredJwtException ex){
            LOGGER.error("JWT expired",ex);
        }catch (IllegalArgumentException ex){
            LOGGER.error("Token is null, empty or has only whitespaces",ex);
        }catch (MalformedJwtException ex){
            LOGGER.error("JWT is invalid",ex);
        }catch (UnsupportedJwtException ex){
            LOGGER.error("JWT is not supported", ex);
        }catch (SignatureException ex){
            LOGGER.error("signature validation failed",ex);
        }
        return false;
    }
    public String getSubject(String token){
        return parseClaims(token).getSubject();
    }

    private Claims parseClaims(String token){
        return Jwts.parser()
                .setSigningKey(secretkey)
                .parseClaimsJws(token)
                .getBody();
    }
}
