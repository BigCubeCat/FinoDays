package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"psb_bot/database"
)

var BANK_API = os.Getenv("API_ADDRESS")

// GetUserPlans retrieves the plans for a user.
//
// It takes a pointer to a User struct as a parameter and returns a slice of Plan structs.
func GetUserPlans(user *database.User) []Plan {
	url := BANK_API + "/plan"
	body, _ := json.Marshal(createRequestBody(user))
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(body))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println(err)
		return []Plan{}
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Println(resp.StatusCode)
		err, _ := io.ReadAll(resp.Body)
		log.Println(string(err))
		return []Plan{}
	}

	responseBody := parseBody[Response](resp.Body)
	if responseBody == nil {
		return []Plan{}
	}
	return responseBody.Plans
}

func TryApproveCredit(user *database.User, plan *Plan) bool {
	url := fmt.Sprintf("%s/buy/%d/", BANK_API, plan.Id)
	req, _ := http.NewRequest("POST", url, nil)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Println(err)
		return false
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Println(resp.StatusCode)
		err, _ := io.ReadAll(resp.Body)
		log.Println(string(err))
		return false
	}

	res := parseBody[ResponseApproved](resp.Body)
	return res.Status == "approved"
}

func createRequestBody(user *database.User) *Request {
	request := Request{
		User: RequestUser{
			Name:         user.Name,
			Count:        0, // IGNORE
			Income:       user.Salary,
			Consumption:  0, // IGNORE
			Experience:   user.Experience,
			Age:          user.Age,
			Phone:        user.Phone,
			FamilyStatus: user.FamilyStatus,
			Target:       user.Target,
			PBSProduct:   user.PBSProduct,
			Inn:          user.INN,
			Provision:    user.Provision,
			Region:       user.Region,
		},
		Plan: RequestPlan{
			Sum:      user.LoanAmount,
			Duration: user.LoanTerm,
		},
	}
	return &request
}

func parseBody[T any](body io.ReadCloser) *T {
	var parsedResponse T
	err := json.NewDecoder(body).Decode(&parsedResponse)
	if err != nil {
		fmt.Println("Error:", err)
		return nil
	}
	return &parsedResponse
}
