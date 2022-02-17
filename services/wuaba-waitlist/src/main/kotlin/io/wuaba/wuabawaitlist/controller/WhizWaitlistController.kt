package io.wuaba.wuabawaitlist.controller

import io.wuaba.wuabawaitlist.model.WhizWaitlist
import io.wuaba.wuabawaitlist.repository.WhizWaitlistRepository
import io.wuaba.wuabawaitlist.repository.WonderWaitlistRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/whiz")
class WhizWaitlistController {

    @Autowired
    lateinit var repository: WhizWaitlistRepository

    @GetMapping
    @ResponseBody
    fun findByEmail(@RequestParam email: String) = repository.findByEmail(email)

    @PostMapping
    @ResponseBody
    fun addWhiz(@RequestParam email: String) = repository.save(WhizWaitlist(email, "Baluba", "Baluba"))
}