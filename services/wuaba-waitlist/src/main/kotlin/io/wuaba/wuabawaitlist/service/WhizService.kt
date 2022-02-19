package io.wuaba.wuabawaitlist.service

import io.wuaba.wuabawaitlist.dto.Whiz
import io.wuaba.wuabawaitlist.repository.WhizRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class WhizService(val whizRepository: WhizRepository) {

    fun getWhizByEmail(email: String): Whiz? {
        val exists = whizRepository.existsByEmail(email)

        if(!exists){
            println("User not existing")
            return null
        }

        return whizRepository.findByEmail(email)
    }

    fun getAllWhizzes() = whizRepository.findAll()

    fun addNewWhiz(email: String): Whiz? {
        val exists = whizRepository.existsByEmail(email)

        if(exists) {
            println("The user is already existing")
            return null
        }

        val newWhiz = Whiz(email, null, null)
        return whizRepository.save(newWhiz)
    }

    fun updateWhiz(email: String, targetWhiz: Whiz): Whiz? {
        val exists = whizRepository.existsByEmail(email)
        val newWhiz = Whiz(email, targetWhiz.firstName, targetWhiz.lastName)

        if(!exists) {
            println("The user you are trying to update does not exist")
            return null
        }

        return whizRepository.save(newWhiz)

    }

    @Transactional
    fun deleteWhiz(email: String) {
        val exists = whizRepository.existsByEmail(email)

        if(exists)
            whizRepository.deleteByEmail(email)
        else
            println("User not found")

    }

}