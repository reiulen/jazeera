<?php

namespace App\View\Components;

use Illuminate\View\Component;

class AppFrontLayout extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */

    protected $title;
    public function __construct($title)
    {
        $this->title = $title;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $title = $this->title;
        return view('front.layout.app', compact('title'));
    }
}
