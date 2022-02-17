package io.wuaba.wuabawaitlist.controller

import io.wuaba.wuabawaitlist.model.WhizWaitlist
import io.wuaba.wuabawaitlist.model.WonderWaitlist
import io.wuaba.wuabawaitlist.repository.WonderWaitlistRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestAttribute
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/wonder")
class WonderWaitlistController {

    @Autowired
    lateinit var repository: WonderWaitlistRepository

    @GetMapping
    @ResponseBody
    fun findByEmail(@RequestParam email: String) = repository.findByEmail(email)

    @PostMapping
    @ResponseBody
    fun addWonder(@RequestParam email: String) = repository.save(WonderWaitlist(email, "BalubaWonder", "BalubaWonder"))

}