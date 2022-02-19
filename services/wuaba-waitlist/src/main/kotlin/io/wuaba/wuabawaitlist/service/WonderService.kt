package io.wuaba.wuabawaitlist.service

import io.wuaba.wuabawaitlist.dto.Wonder
import io.wuaba.wuabawaitlist.repository.WonderRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class WonderService(val wonderRepository: WonderRepository) {

    fun getWonderByEmail(email: String): Wonder? {
        val exists = wonderRepository.existsByEmail(email)

        if(!exists){
            println("User not existing")
            return null
        }

        return wonderRepository.findByEmail(email)
    }

    fun getAllWonders() = wonderRepository.findAll()

    fun addNewWonder(email: String): Wonder? {
        val exists = wonderRepository.existsByEmail(email)

        if(exists) {
            println("The user is already existing")
            return null
        }

        val newWonder = Wonder(email, null, null)
        return wonderRepository.save(newWonder)
    }

    fun updateWonder(email: String, targetWonder: Wonder): Wonder? {
        val exists = wonderRepository.existsByEmail(email)
        val newWonder = Wonder(email, targetWonder.firstName, targetWonder.lastName)

        if(!exists) {
            println("The user you are trying to update does not exist")
            return null
        }

        return wonderRepository.save(newWonder)

    }

    @Transactional
    fun deleteWonder(email: String) {
        val exists = wonderRepository.existsByEmail(email)

        if(exists)
            wonderRepository.deleteByEmail(email)
        else
            println("User not found")

    }

}