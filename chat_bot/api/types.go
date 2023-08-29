package api

import "psb_bot/database"

type Response struct {
	Plans []Plan `json:"plans"`
}

type ResponseApproved struct {
	Status string `json:"status"`
}

type Request struct {
	User RequestUser `json:"user"`
	Plan RequestPlan `json:"plan"`
}

type RequestUser struct {
	Name         string                `json:"name"`
	Age          int                   `json:"age"`
	Phone        string                `json:"phone"`
	FamilyStatus database.FamilyStatus `json:"familyStatus"`
	Target       database.LoanTarger   `json:"target"`
	PBSProduct   database.PBSProduct   `json:"pbsProduct"`
	Inn          string                `json:"inn"`
	Count        int                   `json:"count"`
	Income       int                   `json:"income"`
	Consumption  int                   `json:"consumption"`
	Experience   int                   `json:"experience"`
	Provision    database.Provision    `json:"provision"`
	Region       string                `json:"region"`
}

type RequestPlan struct {
	Sum      int `json:"sum"`
	Duration int `json:"duration"`
}

type PlanSum struct {
	From int `json:"from"`
	To   int `json:"to"`
}

type Plan struct {
	Id        int64               `json:"id"`
	Title     string              `json:"title"`
	Type      database.LoanTarger `json:"type"`
	Sum       PlanSum             `json:"sum"`
	Duration  int                 `json:"duration"`
	Rate      float32             `json:"rate"`
	Condition PlanCondition       `json:"condition"`
}

type PlanCondition struct {
	Provision string `json:"provision"`
}
