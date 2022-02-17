package io.wuaba.wuabawaitlist.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
class WonderWaitlist (
    @Id
    val email: String,
    val name: String,
    val surname: String,
//    @Column(nullable=false, name="school_name")
//    val schoolName: String,
//    @Column(name="school_path")
//    val schoolPath: String,
//    @Column(nullable=false, name="favorite_subjects")
//    val favoriteSubjects: String[],
//    @ElementCollection
//    @Column(nullable=false, name="unfavorite_subjects")
//    val unfavoriteSubjects: Set<String>,
//    @ElementCollection
//    @Column(nullable=false, name="hobbies")
//    val hobbies: Set<String>,
//    @Column(nullable=false, name = "scholarly_level")
//    val scholarlyLevel: Int, //TODO put min and max
//    @ElementCollection
//    @Column(nullable=false, name="academic_paths")
//    val academicPaths: Set<String>,
//    @Column(nullable=false, name="foreign_experience")
//    val foreignExperience: Boolean,
//    @Column(nullable=false, name="work_career_idea")
//    val workCareerIdea: Boolean,
//    @ElementCollection
//    @Column(name="work_careers")
//    val workCareers: Set<String>,
//    @ElementCollection
//    @Column(nullable=false, name="working_sectors")
//    val workingSectors: Set<String>,
//    @ElementCollection
//    @Column(name="favorite_channel")
//    val favoriteChannel: Set<String>,
//    @ElementCollection
//    @Column(nullable=false, name="referral_wonders")
//    val referralWonders: Set<String>,
//    @Column(nullable=false, name="privacy_confirm")
//    val privacyConfirm: Boolean,
)