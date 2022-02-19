package io.wuaba.wuabawaitlist.dto

import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Wonder (
    @Id
    val email: String,
    val firstName: String?,
    val lastName: String?,
)