package io.wuaba.wuabawaitlist.presentation

import io.wuaba.wuabawaitlist.dto.Whiz
import io.wuaba.wuabawaitlist.service.WhizService
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
@RequestMapping("/v1/whiz")
class WhizController(
    private val whizService: WhizService
    ) {

    @GetMapping
    @ResponseBody
    fun findWhizByEmail(@RequestParam email: String) = whizService.getWhizByEmail(email)

    @GetMapping("all")
    @ResponseBody
    fun findAllWhizzes() = whizService.getAllWhizzes()

    @DeleteMapping
    fun deleteWhiz(@RequestParam email: String) = whizService.deleteWhiz(email)


    @PostMapping
    @ResponseBody
    fun addWhiz(@RequestParam email: String) = whizService.addNewWhiz(email)


    @PutMapping
    @ResponseBody
    fun updateWhiz(@RequestBody updatedWhiz: Whiz) = whizService.updateWhiz(updatedWhiz.email, updatedWhiz)

}