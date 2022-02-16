package io.wuaba.wuabawaitlist.controller

import io.wuaba.wuabawaitlist.repository.WaitlistRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/waitlist")
class WaitlistController {

    @Autowired
    lateinit var repository: WaitlistRepository

    @GetMapping("/{email}")
    fun findByEmail(@PathVariable email: String) = repository.findByEmail(email)


}