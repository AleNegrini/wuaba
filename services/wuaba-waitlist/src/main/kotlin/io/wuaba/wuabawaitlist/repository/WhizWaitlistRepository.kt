package io.wuaba.wuabawaitlist.repository

import io.wuaba.wuabawaitlist.model.WhizWaitlist
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface WhizWaitlistRepository: CrudRepository<WhizWaitlist, String> {

    fun findByEmail(email: String): WhizWaitlist?

    fun save(whiz: WhizWaitlist): WhizWaitlist

}