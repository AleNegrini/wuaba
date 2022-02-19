package io.wuaba.wuabawaitlist.presentation

import io.wuaba.wuabawaitlist.dto.Wonder
import io.wuaba.wuabawaitlist.service.WonderService
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/wonder")
class WonderController(
    private val wonderService: WonderService
) {

    @GetMapping
    @ResponseBody
    fun findWonderByEmail(@RequestParam email: String) = wonderService.getWonderByEmail(email)

    @GetMapping("all")
    @ResponseBody
    fun findAllWonders() = wonderService.getAllWonders()

    @DeleteMapping
    fun deleteWonder(@RequestParam email: String) = wonderService.deleteWonder(email)


    @PostMapping
    @ResponseBody
    fun addWonder(@RequestParam email: String) = wonderService.addNewWonder(email)


    @PutMapping
    @ResponseBody
    fun updateWonder(@RequestBody updatedWonder: Wonder) = wonderService.updateWonder(updatedWonder.email, updatedWonder)

}