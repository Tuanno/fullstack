<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Coaches extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'auto_increment' => true
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => 45,
            ],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('coaches');
    }

    public function down()
    {
        //
    }
}
