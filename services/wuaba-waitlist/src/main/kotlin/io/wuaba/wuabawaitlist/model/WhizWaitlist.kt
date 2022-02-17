package io.wuaba.wuabawaitlist.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
class WhizWaitlist (
    @Id
    val email: String,
    val name: String,
    val surname: String,
)