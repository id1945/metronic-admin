<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SystemLogTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_system_log_page_can_be_rendered()
    {
        $response = $this->get('/log/system');

        $response->assertStatus(200);
    }
}
