package io.wuaba.wuabawaitlist.repository

import io.wuaba.wuabawaitlist.model.Waitlist
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface WaitlistRepository: CrudRepository<Waitlist, String> {

    fun findByEmail(email: String): Waitlist?

}