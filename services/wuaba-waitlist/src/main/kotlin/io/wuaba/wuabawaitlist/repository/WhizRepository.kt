package io.wuaba.wuabawaitlist.repository

import io.wuaba.wuabawaitlist.dto.Whiz
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface WhizRepository: CrudRepository<Whiz, String> {

    fun findByEmail(email: String): Whiz?

    override fun findAll(): Iterable<Whiz>

    fun save(whiz: Whiz): Whiz

    fun deleteByEmail(email: String)

    fun existsByEmail(email: String): Boolean

}