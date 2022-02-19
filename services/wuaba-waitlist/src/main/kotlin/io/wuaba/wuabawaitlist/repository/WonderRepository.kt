package io.wuaba.wuabawaitlist.repository

import io.wuaba.wuabawaitlist.dto.Wonder
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface WonderRepository: CrudRepository<Wonder, String> {

    fun findByEmail(email: String): Wonder?

    override fun findAll(): Iterable<Wonder>

    fun save(wonder: Wonder): Wonder

    fun deleteByEmail(email: String)

    fun existsByEmail(email: String): Boolean

}