package io.wuaba.wuabawaitlist.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
class Waitlist (
    @Id
    val email: String,

    @Column(nullable=false)
    val name: String,
)