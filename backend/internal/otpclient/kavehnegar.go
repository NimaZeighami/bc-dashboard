package otpclient

import (
	"fmt"
)

type KavehNegarClient struct {
	APIKey string
}

func NewKavehNegarClient(apiKey string) *KavehNegarClient {
	return &KavehNegarClient{APIKey: apiKey}
}

func (c *KavehNegarClient) SendOTP(phone string, code string) error {
	fmt.Printf("📤 Sending OTP %s to phone %s via Kavenegar\n", code, phone)
	//  call real API here
	return nil
}
