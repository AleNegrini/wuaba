package io.wuaba.wuabawaitlist.repository

import io.wuaba.wuabawaitlist.model.WonderWaitlist
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface WonderWaitlistRepository: CrudRepository<WonderWaitlist, String> {

    fun findByEmail(email: String): WonderWaitlist?

    fun save(wonder: WonderWaitlist): WonderWaitlist

}